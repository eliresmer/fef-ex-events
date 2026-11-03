import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Events } from './events/events';
import { SelectControl } from './select-control/select-control';
import { DraggableElement } from './draggable-element/draggable-element';
import { NgModelDemo } from './ng-model-demo/ng-model-demo';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Events,
    SelectControl,
    DraggableElement,
    NgModelDemo
  ],
  // TODO (Part 1): add FormsModule to imports (and its import statement above)
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
