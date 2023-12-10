
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DelayConfigComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__DelayConfigComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): DelayConfigComp {
		return (gameObject as any)["__DelayConfigComp"];
	}

	private gameObject: any;
	public delay: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
