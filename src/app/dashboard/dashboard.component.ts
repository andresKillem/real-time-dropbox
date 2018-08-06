import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageInfoService } from '../image-info.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ButtonLabelService } from '../shared/services/button-label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;
  private subscription4: Subscription;


  private btn1Label: string;
  private btn2Label: string;
  private btn3Label: string;
  private btn4Label: string;
  private identifier: string;

  private backgroundUrl: string;
  fileIdentifier: string;
  contentFile: any = {};
  videoContent = false;
  imageContent = false;
  pdfContent = false;

  constructor(private imageInfoService: ImageInfoService, private buttonLabelService: ButtonLabelService, private sanitizer: DomSanitizer) {
    this.identifier = 'background';
    this.backgroundUrl = '';
    /*this.projectItems = [
      { title: 'Concept Video',
        imageUrl: 'https://images.freeimages.com/images/large-previews/bf4/the-road-through-the-woods-1449194.jpg', infoText: 'Info text' },
      { title: 'Video Production',
        imageUrl: 'https://images.freeimages.com/images/large-previews/bf4/the-road-through-the-woods-1449194.jpg', infoText: 'Info text' },
      { title: 'Design Brief',
        imageUrl: 'https://images.freeimages.com/images/large-previews/bf4/the-road-through-the-woods-1449194.jpg', infoText: 'Info text' },
      { title: 'Progress Drawings',
        imageUrl: 'https://images.freeimages.com/images/large-previews/bf4/the-road-through-the-woods-1449194.jpg', infoText: 'Info text' },
    ];*/
  }

  ngOnInit() {
    this.getImageInfo(this.identifier);
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
      .subscribe(imageInfo => this.backgroundUrl = imageInfo.uri);
  }
  public getContentFile(identifier: string) {
    this.fileIdentifier = identifier;
    this.imageInfoService.getFileInfo(identifier)
      .subscribe((imageInfo: any) => {
        // this.contentFile = imageInfo;
        if (imageInfo.uri) {
          // console.log("This is the url", this.sanitizer.bypassSecurityTrustResourceUrl(imageInfo.uri));
          // this.contentFile.uri = this.sanitizer.bypassSecurityTrustResourceUrl(imageInfo.uri);
          // this.contentFile.uri = this.sanitizer.bypassSecurityTrustResourceUrl(imageInfo.uri);
          this.contentFile = imageInfo;
          if (imageInfo.uri.search('.jpg') > 0) {
            this.imageContent = true;
            this.videoContent = false;
            this.pdfContent = false;
          }
          if (imageInfo.uri.search('.jpeg') > 0) {
            this.imageContent = true;
            this.videoContent = false;
            this.pdfContent = false;
          }
          if (imageInfo.uri.search('.mp4') > 0) {
            this.videoContent = true;
            this.imageContent = false;
            this.pdfContent = false;
          }
          if (imageInfo.uri.search('.mov') > 0) {
            this.videoContent = true;
            this.imageContent = false;
            this.pdfContent = false;
          }
          if (imageInfo.uri.search('.qt') > 0) {
            this.videoContent = true;
            this.imageContent = false;
            this.pdfContent = false;
          }
          if (imageInfo.uri.search('.pdf') > 0) {
            this.pdfContent = true;
            this.videoContent = false;
            this.imageContent = false;
            // this.contentFile.uri = this.sanitizer.bypassSecurityTrustResourceUrl(imageInfo.uri);
            console.log("This is the sanatized url: " + this.contentFile.uri );
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
