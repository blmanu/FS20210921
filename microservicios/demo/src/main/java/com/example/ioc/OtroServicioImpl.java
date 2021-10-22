package com.example.ioc;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

//@Service
//@Qualifier("otro")
public class OtroServicioImpl implements Servicio {

	private Formato frm;

	public OtroServicioImpl(Formato frm) {
		this.frm = frm;
	}

	@Override
	public String saluda() {
		return frm.formatea("Soy una tetera");
	}

}
