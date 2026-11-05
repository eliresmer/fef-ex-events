import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
const draggableHeight = 300;
const draggableWidth = 300;
@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrl: './events.css'
})



export class Events {
  count: number = 0;
  value: any;
  newval: any;
  coords: any;
  mouseDown: boolean = false;
  draggable: any;

  @ViewChild('draggable') private draggableElement!: ElementRef;
    constructor(private renderer: Renderer2) {
  }

  ngOnInit(){
  this.draggable = this.draggableElement.nativeElement;
  }

  onClick() {
    this.count++;
  }
  keyUp(sender: any) {
    this.value = sender.target.value;
  }
  onKey(input: string) {
    this.newval = input;
  }
  mousemove(event: any) {
    this.coords = `X: ${event.offsetX} Y: ${event.offsetY}`;
  }
  onMouseButton(event:any) {
    this.mouseDown = event.buttons === 0;
  }
  onContentDrag(event:any) {
    if (this.mouseDown) {
      this.renderer.setStyle(this.draggable, 'left', event.clientX + (draggableWidth / 2));
      this.renderer.setStyle(this.draggable, 'top', event.clientY + (draggableHeight / 2));

    }
  }

  // TODO (Part 2): add the message properties and handler methods as you build each demo
  //   2a click      - clickMessage, clickCount, onClickMe(event)
  //   2b keyup      - keyUpMessage, keyCode, onKeyUp(event)
  //   2c keyup/#ref - keyUpMessageFromVar, onKeyUpInputAsVar(element)
  //   2d blur       - leaveMessage, onLeave(element)
  //   2e mousemove  - mouseCoordinates, onMouseMove(event)
}
