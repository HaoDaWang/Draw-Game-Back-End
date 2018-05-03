import { Room } from "../../interfaces/room.interface";

class Rooms{
    public roomID:number = 0
    rooms:Array<Room> = []

    //根据roomID查找room对象
    findRoom(roomID:number):Room | null{
        let result:Room | null = null;
        for(let room of this.rooms){
          if(room.roomID == roomID){
            result = room;
          }
        }
        if(!result) throw new Error("找不到指定Room");
        return result;
    }

    getRooms(){
        return this.rooms
    }
}

export let room = new Rooms()