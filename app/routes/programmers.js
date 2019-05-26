import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Jeff Louden', 'Elon Musk', 'Steve Jobs'];
    }
});
