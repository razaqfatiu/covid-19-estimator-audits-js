/**
 * @jest-environment node
 */
import{onCovid19}from"on-covid-19";import estimator from"../../src/estimator.js";import{getImpactDataStructure,valueOnFields,mockEstimationFor}from"../utils.js";describe("on-covid-19 > Challenge-4",()=>{test("estimate impact on the population, in days",async()=>{const e=await mockEstimationFor("days"),{data:t,estimate:a}=e.data,{periodType:s,timeToElapse:o}=t,i=await onCovid19(t,estimator).estimateImpactAfter(o)[s]();expect(i).toBeTruthy(),expect(i).toMatchObject(getImpactDataStructure());valueOnFields(i,a,["percentCurrentlyInfected","percentInfectedByRequestedTime","percentSevereCasesByRequestedTime","percentCasesForICUByRequestedTime","percentCasesForVentilatorsByRequestedTime"]).forEach(([e,t])=>{expect(e).toBe(t)})}),test("estimate impact on the population, in weeks",async()=>{const e=await mockEstimationFor("weeks"),{data:t,estimate:a}=e.data,{periodType:s,timeToElapse:o}=t,i=await onCovid19(t,estimator).estimateImpactAfter(o)[s]();expect(i).toBeTruthy(),expect(i).toMatchObject(getImpactDataStructure());valueOnFields(i,a,["percentCurrentlyInfected","percentInfectedByRequestedTime","percentSevereCasesByRequestedTime","percentCasesForICUByRequestedTime","percentCasesForVentilatorsByRequestedTime"]).forEach(([e,t])=>{expect(e).toBe(t)})}),test("estimate impact on the population, in months",async()=>{const e=await mockEstimationFor("months"),{data:t,estimate:a}=e.data,{periodType:s,timeToElapse:o}=t,i=await onCovid19(t,estimator).estimateImpactAfter(o)[s]();expect(i).toBeTruthy(),expect(i).toMatchObject(getImpactDataStructure());valueOnFields(i,a,["percentCurrentlyInfected","percentInfectedByRequestedTime","percentSevereCasesByRequestedTime","percentCasesForICUByRequestedTime","percentCasesForVentilatorsByRequestedTime"]).forEach(([e,t])=>{expect(e).toBe(t)})})});
 