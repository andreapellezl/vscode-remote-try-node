/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	const msg = 'Hello remote world!\nAndrea\n';
	res.send (msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);