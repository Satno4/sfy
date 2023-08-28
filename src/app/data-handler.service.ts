import { Injectable } from "@angular/core";
import * as d3 from "d3-fetch";
import { from, map } from "rxjs";
import { SocialService } from "./interfaces/model";

@Injectable({
  providedIn: "root",
})
export class DataHandlerService {
  url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiWiD1kxXugepZ6iJ-QAI2csieusNCbBTcDZhNeOUdMlXtufCu3nmXU9rQTZNIOLnslFsL1aafRnxj/pub?gid=888593843&single=true&output=csv";
  data!: SocialService;

  constructor() {
    this.getData();
  }

  getData() {
    from(d3.csv(this.url))
      .pipe(
        map((data: any) =>
          data.map((el: any, i: number) => ({
            serviceName: el["serviceName"],
            serviceDescription: el["serviceDescription"],
            serviceCategory: el["serviceCategory"].includes(",")
              ? el["serviceCategory"].split(",").map((el: string) => el.trim())
              : [el["serviceCategory"]],
            beneficiary: el["beneficiary"].includes(",")
              ? el["beneficiary"].split(",").map((el: string) => el.trim())
              : el["beneficiary"].includes(" და ")
              ? el["beneficiary"].split(" და ").map((el: string) => el.trim())
              : [el["beneficiary"]],
            provider: el["provider"],
            location: el["location"],
            region: el["region"].includes(",")
              ? el["region"].split(",").map((el: string) => el.trim())
              : [el["region"]],
            email: el["email"],
            phone: el["phone"],
            address: el["address"],
            singleUse:
              el["singleUse"] === "TRUE"
                ? true
                : el["singleUse"] === "FALSE"
                ? false
                : null,
            healthRequirement: el["healthRequirement"] ? el["healthRequirement"].includes(",") ? el["healthRequirement"].split(",").map((el: string) => el.trim()) : [el["healthRequirement"]] : null,
            familyRequirement: el["familyRequirement"] ? el["familyRequirement"].includes(",")
              ? el["familyRequirement"]
                  .split(",")
                  .map((el: string) => el.trim())
              : [el["familyRequirement"]] : null,
            documentation: el["documentation"].includes(";")
              ? el["documentation"].split(";").map((el: string) => el.trim())
              : [el["documentation"]],
            ageRestriction: el["ageRestriction"]
              ? {
                  min: el["ageRestriction"]
                    .split("-")
                    .map((el: string) => el.trim())[0],
                  max: el["ageRestriction"]
                    .split("-")
                    .map((el: string) => el.trim())[1],
                }
              : null,
            benefit: el["benefit"],
            yearSpecific:
              el["yearSpecific"] === "TRUE" || el["yearSpecific"] === "FALSE"
                ? el["yearSpecific"]
                : null,
            educationRequirement: el["educationRequirement"].includes(",")
              ? el["educationRequirement"]
                  .split(",")
                  .map((el: string) => el.trim())
              : [el["educationRequirement"]],
            diagnoses: el["diagnoses"]
              ? el["diagnoses"].includes(",")
                ? el["diagnoses"].split(",").map((el: string) => el.trim())
                : [el["diagnoses"]]
              : null,
            index: i,
          }))
        )
      )
      .subscribe((data: SocialService) => {
        this.data = data;
        console.log("Loaded data: ", this.data);
      });
  }
}