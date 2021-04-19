import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercises';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  top = 0;
  bottom = 0;
  left = 0;
  right = 0;

  confirmTakeOff(){
    const canTakeOff = confirm("Confirm that the shuttle is ready for takeoff");
    if(canTakeOff){
      this.message="Shuttle in flight.";
      this.color='blue';
      this.height=10000;
    }
  }

  landShuttle(){
    window.alert("The shuttle is landing. Landing gear engaged.")
    this.color='green';
    this.height=0;
  }

  abortMission(){
    const abortMission = confirm("Do you really want to abort the mission.?");
    if(abortMission){
      this.message = 'Mission aborted';
      this.color='red';
      this.height=0;
    }
  }

  handleUp(){
    this.top=10;
  }

  handleDown(){
    console.log('handleDown')
    this.bottom=10;
  }

  handleRight(){
    this.right=10;
  }

  handleLeft(){
    this.left=10;
  }
  
}
