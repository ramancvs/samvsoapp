import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { NavigationService } from '../services/navigation.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './common-layout.component.html'
})

export class CommonLayoutComponent implements OnInit {

    public app: any;
    public headerThemes: any;
    public changeHeader: any;
    public sidenavThemes: any;
    public changeSidenav: any;
    public headerSelected: any;
    public sidenavSelected: any;
    public user: any;
    notificationsList: any;
    navigationList: any;
    constructor(private userService: UserService,
        private oauthService: OAuthService,
        private router: Router,
        private navigationService: NavigationService,
        private notificationService: NotificationService) {

        this.app = {
            layout: {
                sidePanelOpen: false,
                isMenuOpened: true,
                isMenuCollapsed: false,
                themeConfigOpen: false,
                rtlActived: false
            }


        };
        this.user = this.userService.getUserInfo();
       this.changeHeader = changeHeader;

        function changeHeader(headerTheme) {
            this.headerSelected = headerTheme;
        }

        this.changeSidenav = changeSidenav;

        function changeSidenav(sidenavTheme) {
            this.sidenavSelected = sidenavTheme;
        }

        // this.notificationService.get().subscribe((notificationsList) => {
        //     this.notificationsList = notificationsList;
        // });

        this.navigationService.get().subscribe((navigationList) => {
            this.navigationList = navigationList;
        });
    }


    ngOnInit() {
    }
    logout() {
        this.router.navigate(['/logout']);

    }

}
