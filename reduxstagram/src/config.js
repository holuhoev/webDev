import Raven from 'raven-js'

const sentry_key = "bdcbc52ca76111e8ac304201c0a8d03b"
const sentry_app = "1268060"

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`

export function logException(ex, context) {
    Raven.captureException(ex, {
        extra: context
    })
    window && window.console && console.error && console.error(ex)
}