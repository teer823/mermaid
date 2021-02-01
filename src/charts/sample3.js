export default {
  name: 'sample 3',
  data: `flowchart LR
  classDef document fill:#f00;
  subgraph T1
      A([New Document Set])
      %% Input Schema => Document Structure and data
      %% e.g. Decision from 2 court may initially join same Input Schema but if we go deeper on to detail attribute that can be extracted from document, we may need to create new schema
      A --> B{Do we have same input schema}
      B --No--> C[[New Input Schema]]
      C:::document
      C --> D(Input Schema ready!)
      B --Yes-->D
      D --> E(Select Search Schemas)
  end
  subgraph T2
      F --> G
  end  
`
}
