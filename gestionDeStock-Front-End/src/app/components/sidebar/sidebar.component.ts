import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './moduleclass';

export const ROUTES: Menu[] = [
  {
    id: 1,
    titre: ' Tableau de bord',
    icon: 'ni-tv-2 text-primary',
    url: '/dashboard',
    class: '',
    sousmenu: [
      {
        id: 11,
        titre: ' Vue d\'ensemble',
        icon: 'ni-planet',
        url: '',
      }, {
        id: 12,
        titre: ' Statistique',
        icon: 'ni-chart-pie-35',
        url: 'statistique',
      }
    ]
  },
  {
    id: 2,
    titre: ' Articales',
    icon: 'ni-bag-17 text-blue',
    url: '/icons',
    sousmenu: [
      {
        id: 21,
        titre: ' Articles',
        icon: 'ni-box-2',
        url: '/particle',
      }, {
        id: 12,
        titre: ' Movements du stock',
        icon: 'ni-delivery-fast',
        url: '/mvtstocks',
      }
    ]
  },
  {
    id: 3,
    titre: ' Clients',
    icon: 'ni-satisfied text-orange',
    url: '/maps',
    sousmenu: [
      {
        id: 31,
        titre: ' Clients',
        icon: 'ni-satisfied',
        url: '/listclient',
      }, {
        id: 32,
        titre: ' Commandes clients',
        icon: 'ni-send',
        url: '/listcommandeclients',
      }
    ]
  },
  {
    id: 4,
    titre: ' Fournisseurs',
    icon: 'ni-archive-2 text-yellow',
    url: '/user-profile',
    sousmenu: [
      {
        id: 41,
        titre: ' Fournisseurs',
        icon: 'ni-single-02',
        url: '/listfournisseur',
      }, {
        id: 42,
        titre: ' Commandes fournisseurs',
        icon: 'ni-send',
        url: '/listcommandefournisseur',
      }
    ]
  },
  {
    id: 5,
    titre: ' Parametrages',
    icon: 'ni-settings-gear-65 text-red',
    url: '/tables',
    sousmenu: [
      {
        id: 51,
        titre: ' Categories',
        icon: 'ni-ungroup',
        url: '/pagecategorie',
      }, {
        id: 52,
        titre: ' Utilisateurs',
        icon: 'ni-circle-08',
        url: '/pageusers',
      }
    ]
  }/*
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'ni-tv-2 text-primary', class: ''},
    { path: '/icons', title: 'Articales',  icon: 'ni-bag-17 text-blue', class: '' },
    { path: '/maps', title: 'Clients',  icon: 'ni-satisfied text-orange', class: '' },
    { path: '/user-profile', title: 'Fournisseurs',  icon: 'ni-archive-2 text-yellow', class: '' },
    { path: '/tables', title: 'Parametrages',  icon: 'ni-settings-gear-65 text-red', class: '' },
    { path: '/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon: 'ni-circle-08 text-pink', class: '' }*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  /*public menuProprties: Array<Menu> = [
    {
      id: 1,
      titre: ' Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      sousmenu: [
        {
          id: 11,
          titre: ' Vue d\'ensemble',
          icon: 'fa-solid fa-chart-pie',
          url: '',
        }, {
          id: 12,
          titre: ' Statistique',
          icon: 'fa-solid fa-chart-column',
          url: 'statistique',
        }
      ]
    },
    {
      id: 2,
      titre: ' Articales',
      icon: 'fa-solid fa-box',
      url: '',
      sousmenu: [
        {
          id: 21,
          titre: ' Articles',
          icon: 'fa-solid fa-boxes-stacked',
          url: '',
        }, {
          id: 12,
          titre: ' Movements du stock',
          icon: 'fa-solid fa-box-archive',
          url: '',
        }
      ]
    },
    {
      id: 3,
      titre: ' Clients',
      icon: 'fa-solid fa-people-group',
      url: '',
      sousmenu: [
        {
          id: 31,
          titre: ' Clients',
          icon: 'fa-solid fa-users-line',
          url: '',
        }, {
          id: 32,
          titre: ' Commandes clients',
          icon: 'fa-solid fa-paper-plane',
          url: '',
        }
      ]
    },
    {
      id: 4,
      titre: ' Fournisseurs',
      icon: 'fa-solid fa-people-carry-box',
      url: '',
      sousmenu: [
        {
          id: 41,
          titre: ' Fournisseurs',
          icon: 'fa-solid fa-users-rays',
          url: '',
        }, {
          id: 42,
          titre: ' Commandes fournisseurs',
          icon: 'fa-solid fa-paper-plane',
          url: '',
        }
      ]
    },
    {
      id: 5,
      titre: ' Parametrages',
      icon: 'fa-solid fa-gears',
      url: '',
      sousmenu: [
        {
          id: 51,
          titre: ' Categories',
          icon: 'fa-solid fa-hurricane',
          url: '',
        }, {
          id: 52,
          titre: ' Utilisateurs',
          icon: 'fa-solid fa-user-group',
          url: '',
        }
      ]
    }
  ];*/
 // @ts-ignore
  var1 !: boolean[] = [false, false , false, false , false];
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }

  navigate(url?: string) {
    this.router.navigate([url]);
  }

  // @ts-ignore
  affiche(objet: number): void {

    (this.var1[objet] === true) ? this.var1[objet] = false : this.var1[objet] = true;
  }
}
