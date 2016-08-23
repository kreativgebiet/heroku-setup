
import EventEmitter from 'events'
import { exec } from 'child_process'

class HerokuSetup extends EventEmitter {}

const heroku = new HerokuSetup()

module.exports = function setupHeroku(config) {
  if (typeof config !== 'object') { heroku.emit('error', 'Configuration not in required format') }

  heroku.emit('start')

  for (let remote in config) {
    const name = config[remote]
    const spawner = exec(`heroku git:remote -r ${remote} -a ${name}`, (err, stdout, stderr) => {
      if (!err) {
        heroku.emit('remote-add', remote)
      } else {
        heroku.emit('remote-error', remote, stderr)
      }
    })
  }

  heroku.emit('finish')

  return heroku
}
