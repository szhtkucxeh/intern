import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EntranceComponent } from './entrance/entrance.component';
import { InternComponent } from './intern/intern.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Routes, RouterModule} from '@angular/router';
import { HaveAccountComponent } from './have-account/have-account.component';
import { RouterComponent } from './router/router.component';
import { FormaComponent } from './forma/forma.component';
import { FormbComponent } from './formb/formb.component';
import { TttComponent } from './ttt/ttt.component';
import { FormcComponent } from './formc/formc.component';
import { FormdComponent } from './formd/formd.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnairebComponent } from './questionnaireb/questionnaireb.component';
import { QuestionnaireCComponent } from './questionnaire-c/questionnaire-c.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { SimulatorBComponent } from './simulator-b/simulator-b.component';
import { SupervisorbComponent } from './supervisorb/supervisorb.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';


const routes: Routes = [
  {path: "",component: EntranceComponent},
  {path: "HaveAccount",component: HaveAccountComponent},
  {path: "Supervisor",component: SupervisorComponent},
  {path: "Forma",component: FormaComponent},
  {path: "Formb",component: FormbComponent},
  {path: "Formc",component: FormcComponent},
  {path: "ttt",component: TttComponent},
  {path: "Formd",component: FormdComponent},
  {path: "Questionnaire",component: QuestionnaireComponent},
  {path: "Questionnaireb",component: QuestionnairebComponent},
  {path: "questionnaire-c",component: QuestionnaireCComponent},
  {path: "simulator",component: SimulatorComponent},
  {path: "simulator_b",component: SimulatorBComponent},
  {path: "supervisorb",component: SupervisorbComponent},
 
];



@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    InternComponent,
    SupervisorComponent,
    HaveAccountComponent,
    RouterComponent,
    FormaComponent,
    FormbComponent,
    TttComponent,
    FormcComponent,
    FormdComponent,
    QuestionnaireComponent,
    QuestionnairebComponent,
    QuestionnaireCComponent,
    SimulatorComponent,
    SimulatorBComponent,
    SupervisorbComponent,
    ChildComponent,
    Child2Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
