import qs from 'qs'
import { Linking } from 'react-native'

class EmailModel {
    EmailAddress
    Subject
    Body

    constructor(emailAddress, subject = '', body = '') {
        this.EmailAddress = emailAddress
        this.Subject = subject
        this.Body = body
    }

    async openMail() {
        var url = `mailto:${this.EmailAddress}`

        const query = qs.stringify({
            subject: this.Subject,
            body: this.Body,
        })

        if (query.length) {
            url += `?${query}`;
        }

        const canOpen = await Linking.canOpenURL(url)

        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }

        return Linking.openURL(url)
    }
}

export default EmailModel