class Hall {
    constructor(config) {
        this.config = {
            maxRoomCount: 10,
            users: []
        }
        Object.assign(this.config, config);
        this.users = this.config.users;
    };
    // private
    _init() {

    }
}