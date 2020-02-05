import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BSfront';
  items: MenuItem[];

  ngOnInit() {
    this.items = [

      {
        label: 'Productos',
        items: [
          [
            {
              items: [
                { label: 'Ingresar Prod', routerLink: 'producto/ingresar' },
                { label: 'Listar Prod', routerLink: 'producto/listar' },
              ]
            },

          ],

        ]
      },
      {
        label: 'SERVICIOS',
        items: [
          [
            {
              items: [
                { label: 'Ingresar Servicio', routerLink: 'servicio/ingresar' },
                { label: 'Listar servicio', routerLink: 'servicio/listar' },
              ]
            },

          ],

        ]
      },

      {
        label: 'CATEGORIAS',
        items: [
          [
            {
              items: [
                { label: 'Registrar categoria', routerLink: 'categoria/ingresar' },
                { label: 'Listar categor', routerLink: 'categoria/listar' },
              ]
            },

          ],

        ]
      },
      { label: 'TUSA' }

    ];
  }
}
