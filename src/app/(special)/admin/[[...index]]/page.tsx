"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/../sanity.config";

interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps> = ({}) => {
  return <NextStudio config={config} />;
};

export default AdminPage;
