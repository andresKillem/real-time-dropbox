import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ImageInfoService } from '../image-info.service';
import { ButtonLabelService } from '../shared/services/button-label.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.scss']
})
export class DashboardSettingsComponent implements OnInit, OnDestroy {

  private host: string;
  private port: string;

  private baseUrl: string;

  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;
  private subscription4: Subscription;


  private btn1Label: string;
  private btn2Label: string;
  private btn3Label: string;
  private btn4Label: string;

  private backgroundUploader: FileUploader;
  private saveBackgroundUploader: FileUploader;
  private btnFileUploader1: FileUploader;
  private btnFileUploader2: FileUploader; 
  private btnFileUploader3: FileUploader; 
  private btnFileUploader4: FileUploader; 

  private hasBaseDropZoneOver: boolean;

  private projectItems = [];

  private fileUploaders: FileUploader[] = [];

  private identifier: string;

  private previewImageUrl: string;


  constructor(private imageInfoService: ImageInfoService, private buttonLabelService: ButtonLabelService) {
    this.host = 'localhost';
    this.port = '8080';

    this.baseUrl = `http://${this.host}:${this.port}/contentFile`;

    this.backgroundUploader = new FileUploader({url: this.baseUrl, additionalParameter: {
      'identifier': 'background',
      'projectId': '1'
    }});
    this.btnFileUploader1 = new FileUploader({url: this.baseUrl, additionalParameter: {
      'identifier': 'file1',
      'projectId': '1'
    }});
    this.btnFileUploader2 = new FileUploader({url: this.baseUrl, additionalParameter: {
      'identifier': 'file2',
      'projectId': '1'
    }});
    this.btnFileUploader3 = new FileUploader({url: this.baseUrl, additionalParameter: {
      'identifier': 'file3',
      'projectId': '1'
    }});
    this.btnFileUploader4 = new FileUploader({url: this.baseUrl, additionalParameter: {
      'identifier': 'file4',
      'projectId': '1'
    }});
    this.hasBaseDropZoneOver = false;

    this.previewImageUrl = '';
    this.identifier = 'background';

  }

  ngOnInit() {
     this.getImageInfo('background');
     this.initAllButtons();
  }

  private initAllButtons() {
    this.initBtn1();
    this.initBtn2();
    this.initBtn3();
    this.initBtn4();    
  }

  private initBtn1() {
    this.subscription1 = this.buttonLabelService.btn1Label
    .subscribe(label => this.btn1Label = label);
  }

  private initBtn2() {
    this.subscription2 = this.buttonLabelService.btn2Label
    .subscribe(label => this.btn2Label = label);
  }

  private initBtn3() {
    this.subscription3 = this.buttonLabelService.btn3Label
    .subscribe(label => this.btn3Label = label);
  }

  private initBtn4() {
    this.subscription4 = this.buttonLabelService.btn4Label
    .subscribe(label => this.btn4Label = label);
  }

  private getImageInfo(identifier: string) {
    this.imageInfoService.getFileInfo(identifier)
    .subscribe(imageInfo => this.previewImageUrl = imageInfo.uri);
  }

  private uploadBackground() {
    this.backgroundUploader.uploadAll();
    this.previewImageUrl = '';
    this.backgroundUploader.onCompleteAll = ()  => this.getImageInfo(this.identifier);
  }

  private updateButtonLabel(btn: string, btnLabel: string) {
    this.buttonLabelService.updateButtonLabel(btn, btnLabel);
  }

  private clearBackgroundFileQueue() {
    this.backgroundUploader.clearQueue();
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
    if(this.hasBaseDropZoneOver) {
     this.clearBackgroundFileQueue();
    }
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
