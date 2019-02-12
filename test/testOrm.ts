import {OrmSchemaBuilder} from '../src/index';

interface ITest {
	param1: number;
	param2: string;
	param3?: number;
	param4: string;
	secret: string;
}

const schema: OrmSchemaBuilder<ITest> = {
	param1: {type: 'int'},
	param2: {type: 'string'},
	param3: {type: 'int'},
	param4: {type: 'string'},
	secret: {type: 'string'},
};
