export default {
  name: 'sample 2',
  data: `flowchart TD
  classDef todo fill:#f0f
  classDef stop fill:#f00,color:#fff
  classDef done fill:#00f,color:#fff
  S0(["Master Requirement"])
  S0 --> A1
  subgraph SA [Understand Requirement]
      A1([List Input/Output])
      A1 --> A2{Is I/O specific enough?}
      A2 --No--> A3(Requirement Meeting)
      A3 --> A4[[Log new Team requirement]]
      A4:::todo
      A4 --> A1
  end
  subgraph SB [Check Architect]
      A2 --Yes--> B1(Check Architect)
      B1:::todo
      B1 --> B2(Which component?)
      B2 --> B3{More depth?}
      B3 --Yes--> B4(Go Deeper)
      B4 --> B2
      B3 --No--> B5(Create Task in Jira)
      B5 --> B6(Create Branch from Jira)
  end
  subgraph SC [Coding]
      B6 --> C1(Coding)
      C1 --> C2(Self Test/Unit Test)
      C2 --> C3(Demo)
      C3 --> C4{OK?}
      C4 --No--> C1
      C4 --Yes--> C5[[Write Document]]
      C5:::todo
      C5 --> C6(Create PR)
      C6 --> C7(PR Review)
      C7 --> C8(Merge)
  end
  subgraph SD [Deployment Test]
      C8 --> D1(Create Docker Image)
      D1 --> D2{Do we have hardware}
      D2 --No--> D3[[Hardware Request]]
      D3:::todo
      D3 --> D2
      D2 --Yes--> D4(Deploy Test)
      D4 --> D5{Integration Test}
      D5 --Failed--> D6((FIX))
      D5 --Success--> D7((DONE))
      D6:::stop
      D7:::done
  end

          
  `
}
