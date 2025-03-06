#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateQuestion, rules } from '../src/games/prime.js';

runGame(rules, generateQuestion);
