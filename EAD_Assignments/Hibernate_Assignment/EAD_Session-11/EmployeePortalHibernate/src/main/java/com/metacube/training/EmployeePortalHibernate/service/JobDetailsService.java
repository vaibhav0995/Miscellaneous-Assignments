package com.metacube.training.EmployeePortalHibernate.service;

import java.util.List;

import com.metacube.training.EmployeePortalHibernate.model.JobDetails;

public interface JobDetailsService {

	JobDetails getJobDetailsById(int id);

	List<JobDetails> getAllJobDetails();

	boolean deleteJobDetails(JobDetails jobDetails);

	boolean updateJobDetails(JobDetails jobDetails);

	boolean createJobDetails(JobDetails jobDetails);
	
	public JobDetails getJobDetailsOfEmployee(String employeeCode);
	
}
