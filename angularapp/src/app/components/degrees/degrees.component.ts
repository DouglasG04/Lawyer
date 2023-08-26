import { Component, OnDestroy, OnInit } from '@angular/core';
import { Degrees } from 'src/app/interfaces/lawyer.interface';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit, OnDestroy {

  selectedTitle: number = 0;
  currentIndex: number = 0;
  intervalId: any;

  renderDegrees: Degrees[] = [
    {
      id: 1,
      title: "Notariado III",
      status: true,
      img: 'assets/img/1.jpg',
    },
    {
      id: 2,
      title: "Derecho Civil",
      status: false,
      img: 'assets/img/2.jpg',
    }
  ];

  handleClickToImage(id: number) {
    this.selectedTitle = id;
  }

  ngOnInit(): void {
    this.selectedTitle = this.renderDegrees[0].id;

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.renderDegrees.length;
      this.selectedTitle = this.renderDegrees[this.currentIndex].id;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}


