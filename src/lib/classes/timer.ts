export class Timer {
	private count: number;
	duration: number;
	increase: number;
	interval: NodeJS.Timer | null;
	onEnd: Function;
	onUpdate: Function;

	constructor(
		duration: number,
		increase = 1000,
		onEnd = (count: number) => {},
		onUpdate = (count: number) => {}
	) {
		if (duration < increase)
			throw new Error('Duration must be bigger than Increase!');
		this.count = 0;
		this.duration = duration;
		this.interval = null;
		this.increase = increase;
		this.onEnd = onEnd;
		this.onUpdate = onUpdate;
	}

	start() {
		this.interval = setInterval(() => {
			this.count += this.increase;
			if (this.count >= this.duration) {
				this.endTimer();
			}
			console.log(this.count);
			this.onUpdate(this.count);
		}, this.increase);
	}

	endTimer() {
		if (this.interval) {
			clearInterval(this.interval);
			this.onEnd(this.count);
			this.count = 0;
		}
	}

	get elapsedTime() {
		return this.count;
	}

	get remainingTime() {
		return this.duration - this.count;
	}

	get completed() {
		return this.duration == this.count;
	}
}
