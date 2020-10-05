import { BehaviorSubject } from 'rxjs'

const currentEnvVars = new BehaviorSubject(process.env)

export const environmentService = {
  currentEnv: currentEnvVars.asObservable(),
  get currentEnvValue() {
    return currentEnvVars.value
  },
  updateCurrentEnvValue(value: NodeJS.ProcessEnv) {
    currentEnvVars.next(value)
  }
}
