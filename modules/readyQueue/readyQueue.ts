class ReadyQueue{
    private queue:ReadyQueueBody[] = []
    private socketQueue:SocketIO.Socket[] = []

    setQueue(queue:ReadyQueueBody[]){
        this.queue = queue
    }
    
    getQueue(){
        return this.queue
    }

    pushSocket(socket:SocketIO.Socket){
        this.socketQueue.push(socket)
    }

    getSocketQueue(){
        return this.socketQueue
    }

    //重置
    reset(){
        this.queue = []
        this.socketQueue = []
    }
}

//单例
export let readyQueue = new ReadyQueue()