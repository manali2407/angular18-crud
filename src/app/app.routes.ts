import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { AtributeDirectivesComponent } from './directives/atribute-directives/atribute-directives.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { IfElseComponent } from './control-flow/if-else/if-else.component';
import { ForComponent } from './control-flow/for/for.component';
import { SwitchComponent } from './control-flow/switch/switch.component';

export const routes: Routes = [
    {path:'add-emp', component:AddEmployeeComponent},
    {path:'emp-list', component:EmployeeListComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'structural', component:StructuralDirectivesComponent},
    {path:'atribute', component:AtributeDirectivesComponent},
    {path:'ifElse', component:IfElseComponent},
    {path:'for', component:ForComponent},
    {path:'switch', component:SwitchComponent},
];
