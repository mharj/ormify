type PropertyType = 'string' | 'int' | 'float' | 'bool' | 'list';

interface IOrmSchemaProperty {
	type: PropertyType;
	objectType?: string;
	property?: string;
	default?: any;
}

type PropertyTypes = PropertyType | IOrmSchemaProperty | IOrmSchemaProperty[];

export interface IOrmKey {
	toString: () => string;
}

export type OrmSchemaBuilder<C> = {[P in keyof C]-?: PropertyTypes};

export interface IOrmSchema {
	[key: string]: PropertyTypes;
}

export interface IOrmObject {
	getKey: () => IOrmKey;
	save: () => Promise<any>;
	delete: () => Promise<any>;
	update: () => Promise<any>;
}
