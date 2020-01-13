import store from '../store'

class MarkerModel {
    Latitude
    Longitude
    Name

    constructor(latitude = 0, longitude = 0, name = '') {
        this.Latitude = latitude
        this.Longitude = longitude
        this.Name = name
    }

    Distance(marker) {
        var R = 6371
        var dLat = deg2rad(this.Latitude - marker.Latitude)
        var dLon = deg2rad(this.Longitude - marker.Longitude) 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(this.Latitude)) * Math.cos(deg2rad(marker.Latitude)) * Math.sin(dLon/2) * Math.sin(dLon/2) 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        var d = R * c
        return d
    }

    AddToMap() {
        store.dispatch({type: 'NEW-MARKER', newMarker: this})
    }

    Coords() {
        return {
            latitude: this.Latitude,
            longitude: this.Longitude
        }
    }
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

export default MarkerModel