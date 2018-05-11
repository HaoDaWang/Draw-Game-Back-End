import { Room } from "../../interfaces/room.interface";

class Rooms{
    private roomID:number = 0
    private rooms:Array<Room> = []

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

    getRoomID(){
        return this.roomID++
    }
}

export let room = new Rooms()