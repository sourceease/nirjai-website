import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nj-home',
  templateUrl: './nj-home.component.html',
  styleUrls: ['./nj-home.component.scss']
})
export class NjHomeComponent implements OnInit, AfterViewInit  {

  selectedTab: number = 1;
  observer:any;
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  service = '';
  industry = '';
  description = '';
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.ovservElement();
    this.scrollAnimation();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }
  navigateToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  technologiesIcon = [

    // web technologies

    { tech: 'web', techName: 'Angular', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/angular.png' },
    { tech: 'web', techName: 'Vue.js', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/vue.png' },
    { tech: 'web', techName: 'React', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/react.png' },
    { tech: 'web', techName: '.Net', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/net.png' },
    { tech: 'web', techName: 'JS', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/js.png' },
    { tech: 'web', techName: 'Bootstrap', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/Web app dev/bootstrap.png' },

    // mobile

    { tech: 'mobile', techName: 'Andriod', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/android.png' },
    { tech: 'mobile', techName: 'Flutter', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/flutter.png' },
    { tech: 'mobile', techName: 'IOS', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/ios.png' },
    { tech: 'mobile', techName: 'Kotlin', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/kotlin.png' },
    { tech: 'mobile', techName: 'React Native', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/native.png' },
    { tech: 'mobile', techName: 'Swift', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/mobile app dev/swift.png' },

    // Middleware

    { tech: 'middleware', techName: 'Java', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/middleware/java.png' },
    { tech: 'middleware', techName: '.Net', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/middleware/net.png' },
    { tech: 'middleware', techName: 'Node', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/middleware/node.png' },
    { tech: 'middleware', techName: 'Python', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/middleware/py.png' },
    { tech: 'middleware', techName: 'Spring Boot', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/middleware/spring.png' },

    // Business/Artifical

    { tech: 'business', techName: 'Domo', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/business ai/demo.png' },
    { tech: 'business', techName: 'Qulik', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/business ai/quik.png' },
    { tech: 'business', techName: 'Zoho Analytics', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/business ai/red.png' },
    { tech: 'business', techName: 'Power BI', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/business ai/yel.png' },

    // Automation

    { tech: 'automation', techName: 'Cucumber', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a1.png' },
    { tech: 'automation', techName: 'Appium', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a2.png' },
    { tech: 'automation', techName: 'Selenium', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a3.png' },
    { tech: 'automation', techName: 'Robot Framework', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a4.png' },
    { tech: 'automation', techName: 'Mocha', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a5.png' },
    { tech: 'automation', techName: 'Playwrite', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a6.png' },
    { tech: 'automation', techName: 'JMeter', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/automation testing/a7.png' },

    // Cloud Based Solution

    { tech: 'cloud', techName: 'Ansible', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/cloud services/a1.png' },
    { tech: 'cloud', techName: 'AWS', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/cloud services/aws.png' },
    { tech: 'cloud', techName: 'Microsoft Azure', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/cloud services/azore.png' },
    { tech: 'cloud', techName: 'IBM Cloud', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/cloud services/cd1.png' },
    { tech: 'cloud', techName: 'Google Cloud Platform', imageUrl: '../../../assets/nirjai/it-staffing/Technologies logo/cloud services/glg.png' },

  ]

  chngTech(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
  chngTechMob($event: any): void {
    this.selectedTab = $event + 1;
  }

  getFilteredTechnologies(): { tech: string, imageUrl: string, techName?:string }[] {
    switch (this.selectedTab) {
      case 1:
        return this.technologiesIcon.filter(item => item.tech === 'web');
      case 2:
        return this.technologiesIcon.filter(item => item.tech === 'mobile');
      case 3:
        return this.technologiesIcon.filter(item => item.tech === 'middleware');
      case 4:
        return this.technologiesIcon.filter(item => item.tech === 'business');
      case 5:
        return this.technologiesIcon.filter(item => item.tech === 'automation');
      case 6:
        return this.technologiesIcon.filter(item => item.tech === 'cloud');
      default:
        return [];
    }
  }

  ovservElement() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  }

  scrollAnimation() {
    const hiddenElements = document.querySelectorAll('.custom-hidden');
    hiddenElements.forEach((e1) => this.observer.observe(e1));
  }

  openEmail() {
    const subject = `Inquiry Regarding ${this.service}`;
    const body = `
      Dear Nirjai Technologies Team,
  
      I hope this message finds you well. I recently filled out the "Contact Us" form on your website and wanted to provide my details for further communication regarding the services I am interested in.
  
      Here are my details:
      Name: ${this.firstName} ${this.lastName}
      Service Type: ${this.service}
      Industry: ${this.industry}
      Email: ${this.email}
      Phone Number: ${this.phone}
      Description: ${this.description}
  
      Please feel free to reach out to me at your earliest convenience. I look forward to discussing how Nirjai Technologies can support my business needs.
      Thank you for your time and assistance!
  
      Best regards,
      ${this.firstName} ${this.lastName}
      ${this.email}
      ${this.phone}
    `;
    const mailtoLink = `mailto:varun.garg@nirjai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;    
    window.location.href = mailtoLink;
  }
  

}
