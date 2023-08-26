import { Component, OnInit } from '@angular/core';
import { IconDefinition, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import { Social } from 'src/app/interfaces/lawyer.interface';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    hamburgerMenu: IconDefinition = faBars;
    closeMenu: IconDefinition = faClose;
    statusHamburgerMenu: boolean = false;


    socialMedia: Social[] = [
        {
            icon: faFacebook,
            link: 'https://douglasg04.github.io/portfolio.app/'
        },
        {
            icon: faInstagram,
            link: 'https://douglasg04.github.io/portfolio.app/'
        },
        {
            icon: faLinkedin,
            link: 'https://douglasg04.github.io/portfolio.app/'
        }
    ]


    handleShowMenu() {
        this.statusHamburgerMenu = true;
    }

    handleHideMenu(){
        this.statusHamburgerMenu = false;
    }


}
