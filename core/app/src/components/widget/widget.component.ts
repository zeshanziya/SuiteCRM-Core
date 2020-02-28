import {Component, OnInit} from '@angular/core';
import { ChartUiComponent } from "@components/chart/chart.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'scrm-widget-ui',
    templateUrl: 'widget.component.html',
    animations: [
        trigger("widgetFade", [
            transition("void => *", [
                style({transform: "translateX(100%)", opacity: 0}),
                animate("500ms", style({transform: "translateX(0)", opacity: 1}))
            ]),
            transition("* => void", [
                style({transform: "translateX(0)", opacity: 1}),
                animate("500ms", style({transform: "translateX(100%)", opacity: 0}))
            ])
        ]),
        trigger("widgetContentFade", [
            transition("void => *", [
                style({transform: "translateY(-5%)", opacity: 0}),
                animate("500ms", style({transform: "translateY(0)", opacity: 1}))
            ]),
            transition("* => void", [
                style({transform: "translateY(0)", opacity: 1}),
                animate("500ms", style({transform: "translateY(-5%)", opacity: 0}))
            ])
        ])
    ]
})

export class WidgetUiComponent implements OnInit {


    displayWidgetContent: boolean = true;
    widgetHeaderToggleIcon: string = "public/themes/suite8/images/minimise_circled.svg";

    toggleWidgetContent() {
        if (this.widgetHeaderToggleIcon == "public/themes/suite8/images/minimise_circled.svg") {
            this.widgetHeaderToggleIcon = "public/themes/suite8/images/plus_thin.svg";
            this.displayWidgetContent = false;
        } else {
            this.widgetHeaderToggleIcon = "public/themes/suite8/images/minimise_circled.svg";
            this.displayWidgetContent = true;
        }
    }

    ngOnInit() {

    }
}
