package com.example.exceptions;

public class DuplicateKeyException extends Exception {

	final static String MESSAGE_STRING = "Duplicate Key";
	
	public DuplicateKeyException() {
		this(MESSAGE_STRING);
	}

	public DuplicateKeyException(String message) {
		super(message);
	}

	public DuplicateKeyException(Throwable cause) {
		this(MESSAGE_STRING,cause);
	}

	public DuplicateKeyException(String message, Throwable cause) {
		super(message, cause);
	}

	public DuplicateKeyException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
