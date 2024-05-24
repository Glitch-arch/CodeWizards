import express, {Express} from "express";

import bullBoardServerAdapter from "./config/bullBoard.config";
import serverConfig from "./config/server.config";
import submissionProducer from "./producers/submission.Producer";
import apiRouter from "./routes";
import { submission_queue } from "./utils/constants";
import sampleWorker from "./workers/sample.Worker";
import SubmissionWorker from "./workers/submission.Worker";

const app: Express = express();

app.use('/api', apiRouter);
app.use('/ui', bullBoardServerAdapter.getRouter());


app.listen(serverConfig.PORT, () => {

    console.log("Server started on Port: " + serverConfig.PORT);
    console.log('Bull Board Ui running at: ', serverConfig.PORT,"/ui" );
    sampleWorker('sampleQueue');
    SubmissionWorker(submission_queue);

  
  const userCode = `
  
    class Solution {
      public:
      vector<int> permute() {
          vector<int> v;
          v.push_back(10);
          return v;
      }
    };
  `;

  const code = `
  #include<iostream>
  #include<vector>
  #include<stdio.h>
  using namespace std;
  
  ${userCode}

  int main() {

    Solution s;
    vector<int> result = s.permute();
    for(int x : result) {
      cout<<x<<" ";
    }
    cout<<endl;
    return 0;
  }
  `;

const inputCase = `10
`;

submissionProducer({"1234": {
  language: "CPP",
  inputCase,
  code
}
});
    
});

