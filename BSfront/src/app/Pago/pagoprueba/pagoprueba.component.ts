import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { async } from '@angular/core/testing';
declare var paypal;
@Component({
  selector: 'app-pagoprueba',
  templateUrl: './pagoprueba.component.html',
  styleUrls: ['./pagoprueba.component.css']
})
export class PagopruebaComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  producto = {
    precio: '150',
    descripcion: 'laptop',
    img: "https://electrocashoficial.com/wp-content/uploads/2019/02/1-28.png"
  };

  paidFor = false;
  ngOnInit() {

    paypal.Buttons({
      createorder: (data, actions) => {
        return actions.order.create({
          vender: [
            {
              descr: this.producto.descripcion,
              amount: {
                currency_code: 'USD',
                value: this.producto.precio
              }
            }
          ]
        });
      },

      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);


      },
      onError: err => {
        console.log(err);

      }
    })
      .render(this.paypalElement.nativeElement);
  }

}
