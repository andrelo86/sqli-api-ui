const api = require('../config/api.json')
const request = require('superagent')
const user = require('../data/user.json')
const base_url = api.base_url + api.v3
describe('Pet', () => {

    const status = {
        available: 'available',
        sold: 'sold',
        pending: 'pending',
    }

    const filters = {
        byStatus: '?status=',
        byTags: '?tags='
    }

    it('should create a new user', async () => {
        const res = await request
        .post(base_url + api.service.user)
        .send(user)
        expect(res.status).toBe(200)
    })

    it('should get a user', async () => {
        const res = await request
        .get(base_url + api.service.user + '/' + user.username)
        console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.body.username).toEqual(user.username)
    })

    it('should get pets filter by status', async () => {
        const filter = filters.byStatus + status.sold
        const res = await request
            .get(base_url + api.service.findByStatus + filter)
        
        // Assertions
        expect(res.status).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        const findings = []
        res.body.forEach((object) => {
            expect(object.status).toBe(status.sold)
            findings.push({id:object.id, name:object.name})
        })
        console.log(findings)
        
        // Count repeated names
        const counts = {};
        findings.forEach(function (x) { counts[x.name] = (counts[x.name] || 0) + 1; });
        console.log(counts)})
})