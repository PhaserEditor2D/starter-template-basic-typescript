
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DurationConfigComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__DurationConfigComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): DurationConfigComp {
		return (gameObject as any)["__DurationConfigComp"];
	}

	private gameObject: any;
	public duration: number = 250;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
