/** @file default_values.js */

/*
 *    Copyright (C) 2012 10gen Inc.
 *
 *    This program is free software: you can redistribute it and/or  modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Defines global default values for the test suite
 */

load("perfbench/namespace.js");

mongo.namespace("mongo.benchmark.result.defaults");
mongo.namespace("mongo.benchmark.test.defaults");

mongo.benchmark.result.defaults = {
    //some default values
    saveResult : "no",
    resultServerInfo :  { hostname : "127.0.0.1" },
    resultDB : "experiment",
    resultColl : "results"
};

// these can be overriden from the command line input
mongo.benchmark.test.defaults = {
    //some default values
    testServerInfo :  { hostname: "127.0.0.1", kernelName: 12, kernelRelease: "",
                        kernelVersion: "", Platform: "", OS: "", fileSystem: ""
    },
    mongo : "single",
    dataSetFitsInRam : "yes",
    otherOpsRunning : "no",
    dbprefix : "small",
    numTrials : 4,
    numOps : 60000,
    numThreads : 8,
    numberDatabases : 5,
    numSeconds : 2
};
