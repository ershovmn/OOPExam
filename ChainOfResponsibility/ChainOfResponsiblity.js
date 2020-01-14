export default class ChainOfResponsibility {
    setNext(next) {
        if(this.next === undefined) {
            this.next = next
        } else {
            this.next.setNext(next)
        }
    }
}