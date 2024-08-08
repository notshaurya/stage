import fetchStoriesReducer from "@/reducers/fetch-stories-reducer";
import openStoryReducer from "@/reducers/open-story-reducer";
import showContentReducer from "@/reducers/show-content-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ fetchStoriesReducer, openStoryReducer, showContentReducer });

export default rootReducer;
