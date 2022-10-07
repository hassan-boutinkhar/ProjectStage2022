import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PageArticleComponent} from '../../pages/page-article/page-article.component';
import {PageAjouterArticleComponent} from '../../pages/page-article/page-ajouter-article/page-ajouter-article.component';
import {MvstocksComponent} from '../../pages/mvstocks/mvstocks.component';
import {DetailsComponent} from '../../pages/mvstocks/details/details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCommonModule} from '@angular/material/core';
import {PageListClientsComponent} from '../../pages/Clients/page-list-clients/page-list-clients.component';
import {PageListFournisseursComponent} from '../../pages/Fournisseurs/page-list-fournisseurs/page-list-fournisseurs.component';
import {PageAjouteFournisseurComponent} from '../../pages/Fournisseurs/page-ajoute-fournisseur/page-ajoute-fournisseur.component';
import {PageAjouteClientComponent} from '../../pages/Clients/page-ajoute-client/page-ajoute-client.component';
import {PageListCommandeComponent} from '../../pages/Clients/page-list-commande/page-list-commande.component';
import {PageDetailsClientsComponent} from '../../pages/Clients/page-details-clients/page-details-clients.component';
import {
  PageListCommandeFournisseurComponent
} from '../../pages/Fournisseurs/page-list-commande-fournisseur/page-list-commande-fournisseur.component';
import {PageNoveauCommandefrComponent} from '../../pages/Fournisseurs/page-noveau-commandefr/page-noveau-commandefr.component';
import {PageNoveauCommandeClientComponent} from '../../pages/Clients/page-noveau-commande-client/page-noveau-commande-client.component';
import {
  PageDetailsCommandesFounisseurComponent
} from '../../pages/Fournisseurs/page-details-commandes-founisseur/page-details-commandes-founisseur.component';
import {PageCategorieComponent} from '../../pages/page-categorie/page-categorie.component';
import {PageAddCategorieComponent} from '../../pages/page-categorie/page-add-categorie/page-add-categorie.component';
import {PageUsersComponent} from '../../pages/page-users/page-users.component';
import {PageAddUserComponent} from '../../pages/page-users/page-add-user/page-add-user.component';
import {PageUserProrfileComponent} from '../../pages/page-user-prorfile/page-user-prorfile.component';
import {ComponentsModule} from '../../components/components.module';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        MatDialogModule,
        MatButtonModule,
        MatCommonModule,
        MatFormFieldModule,
        MatInputModule,
        ComponentsModule,
        ReactiveFormsModule],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    PageArticleComponent,
    PageAjouterArticleComponent,
    MvstocksComponent,
    DetailsComponent,
    PageListClientsComponent,
    PageListFournisseursComponent,
    PageAjouteFournisseurComponent,
    PageAjouteClientComponent,
    PageListCommandeComponent,
    PageDetailsClientsComponent,
    PageListCommandeFournisseurComponent,
    PageNoveauCommandefrComponent,
    PageNoveauCommandeClientComponent,
    PageDetailsCommandesFounisseurComponent,
    PageCategorieComponent,
    PageAddCategorieComponent,
    PageUsersComponent,
    PageAddUserComponent,
    PageUserProrfileComponent
  ]
})

export class AdminLayoutModule {}
