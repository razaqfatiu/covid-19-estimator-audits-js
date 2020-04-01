/**
 * @jest-environment node
 */
import{onCovid19}from"on-covid-19";import estimator from"../../src/estimator.js";import{getImpactDataStructure,valueOnFields,mockEstimationFor}from"../utils.js";describe("on-covid-19 > Challenge-5",()=>{test("estimate economic impact ($$), in days",async()=>{const t=await mockEstimationFor("days"),{data:e,estimate:a}=t.data,{periodType:o,timeToElapse:i}=e,c=await onCovid19(e,estimator).estimateImpactAfter(i)[o]();expect(c).toBeTruthy(),expect(c).toMatchObject(getImpactDataStructure()),valueOnFields(c,a,["dollarsInFlight"]).forEach(([t,e])=>{expect(t).toBe(e)})}),test("estimate economic impact ($$), in weeks",async()=>{const t=await mockEstimationFor("weeks"),{data:e,estimate:a}=t.data,{periodType:o,timeToElapse:i}=e,c=await onCovid19(e,estimator).estimateImpactAfter(i)[o]();expect(c).toBeTruthy(),expect(c).toMatchObject(getImpactDataStructure()),valueOnFields(c,a,["dollarsInFlight"]).forEach(([t,e])=>{expect(t).toBe(e)})}),test("estimate economic impact ($$), in months",async()=>{const t=await mockEstimationFor("months"),{data:e,estimate:a}=t.data,{periodType:o,timeToElapse:i}=e,c=await onCovid19(e,estimator).estimateImpactAfter(i)[o]();expect(c).toBeTruthy(),expect(c).toMatchObject(getImpactDataStructure()),valueOnFields(c,a,["dollarsInFlight"]).forEach(([t,e])=>{expect(t).toBe(e)})})});

 