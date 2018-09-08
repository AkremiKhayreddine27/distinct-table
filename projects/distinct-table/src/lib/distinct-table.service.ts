import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistinctTableService {

  private rootViewContainer;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  addDynamicComponent(viewContainerRef: any, component, data, parent) {
    this.rootViewContainer = viewContainerRef;
    this.rootViewContainer.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    const createdComponent = this.rootViewContainer.createComponent(factory);
    createdComponent.instance.data = data;
    createdComponent.instance.parent = parent;
  }
}
