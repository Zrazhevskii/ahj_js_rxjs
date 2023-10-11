import { Observable } from 'rxjs';
// const Observable = require('rxjs').default;

const stream$ = new Observable((observer) => {
  setTimeout(() => {
    let time = performance.now()
    observer.next(time)
  }, 5000)
}).subscribe((value) => {
  console.log(value);
})
