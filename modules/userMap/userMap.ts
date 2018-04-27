class UserMap{
    map:Map<string, SocketIO.Socket> = new Map<string, SocketIO.Socket>();

    //获取用户map
    getUserMap():Map<string, SocketIO.Socket>{
        return this.map;
    }
}

export let userMap:UserMap = new UserMap();