import { userMap } from "../userMap/userMap";
import { Z_HUFFMAN_ONLY } from "zlib";

/**
 * 功能：根据传入的socket查找username
 * @param socket 要查找的username对应的socket
 */
export let findUserInMap = function(socket:SocketIO.Socket):string | null{
    let map = userMap.getUserMap()

    for(let key of map.keys()){
        console.log(key)
        if(map.get(key) == socket) {
            return key
        }
    }

    return null
}