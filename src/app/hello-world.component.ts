import { Component, OnInit } from '@angular/core';
import { Logger } from './logger.service'

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html',
    styles: ['h2,p{font-family: sans-serif;}']
})
export class HelloWorldComponent {
    judul = "Hello Angular."
    gambar = 'assets/images/langit.JPG'
    aktif = false
    count = 0

    constructor(private logger: Logger){}

    sayMessage(name){
        alert('Hello '+ name.toUpperCase())
    }

    onEditClick(){
        this.aktif = !this.aktif
    }

    Increment(){
        this.logger.writeCount(this.count)
        this.count++
    }
}
